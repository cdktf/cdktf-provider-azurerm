# `emailCommunicationServiceDomain` Submodule <a name="`emailCommunicationServiceDomain` Submodule" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCommunicationServiceDomain <a name="EmailCommunicationServiceDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain azurerm_email_communication_service_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomain(scope Construct, id *string, config EmailCommunicationServiceDomainConfig) EmailCommunicationServiceDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig">EmailCommunicationServiceDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig">EmailCommunicationServiceDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetUserEngagementTrackingEnabled">ResetUserEngagementTrackingEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts"></a>

```go
func PutTimeouts(value EmailCommunicationServiceDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserEngagementTrackingEnabled` <a name="ResetUserEngagementTrackingEnabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetUserEngagementTrackingEnabled"></a>

```go
func ResetUserEngagementTrackingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCommunicationServiceDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.EmailCommunicationServiceDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.EmailCommunicationServiceDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.EmailCommunicationServiceDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.EmailCommunicationServiceDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmailCommunicationServiceDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailCommunicationServiceDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailCommunicationServiceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmailCommunicationServiceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fromSenderDomain">FromSenderDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.mailFromSenderDomain">MailFromSenderDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference">EmailCommunicationServiceDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.verificationRecords">VerificationRecords</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList">EmailCommunicationServiceDomainVerificationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagementInput">DomainManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceIdInput">EmailServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabledInput">UserEngagementTrackingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagement">DomainManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceId">EmailServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabled">UserEngagementTrackingEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FromSenderDomain`<sup>Required</sup> <a name="FromSenderDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fromSenderDomain"></a>

```go
func FromSenderDomain() *string
```

- *Type:* *string

---

##### `MailFromSenderDomain`<sup>Required</sup> <a name="MailFromSenderDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.mailFromSenderDomain"></a>

```go
func MailFromSenderDomain() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeouts"></a>

```go
func Timeouts() EmailCommunicationServiceDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference">EmailCommunicationServiceDomainTimeoutsOutputReference</a>

---

##### `VerificationRecords`<sup>Required</sup> <a name="VerificationRecords" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.verificationRecords"></a>

```go
func VerificationRecords() EmailCommunicationServiceDomainVerificationRecordsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList">EmailCommunicationServiceDomainVerificationRecordsList</a>

---

##### `DomainManagementInput`<sup>Optional</sup> <a name="DomainManagementInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagementInput"></a>

```go
func DomainManagementInput() *string
```

- *Type:* *string

---

##### `EmailServiceIdInput`<sup>Optional</sup> <a name="EmailServiceIdInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceIdInput"></a>

```go
func EmailServiceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserEngagementTrackingEnabledInput`<sup>Optional</sup> <a name="UserEngagementTrackingEnabledInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabledInput"></a>

```go
func UserEngagementTrackingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DomainManagement`<sup>Required</sup> <a name="DomainManagement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagement"></a>

```go
func DomainManagement() *string
```

- *Type:* *string

---

##### `EmailServiceId`<sup>Required</sup> <a name="EmailServiceId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceId"></a>

```go
func EmailServiceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserEngagementTrackingEnabled`<sup>Required</sup> <a name="UserEngagementTrackingEnabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabled"></a>

```go
func UserEngagementTrackingEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCommunicationServiceDomainConfig <a name="EmailCommunicationServiceDomainConfig" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainManagement: *string,
	EmailServiceId: *string,
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts,
	UserEngagementTrackingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.domainManagement">DomainManagement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.emailServiceId">EmailServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.userEngagementTrackingEnabled">UserEngagementTrackingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainManagement`<sup>Required</sup> <a name="DomainManagement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.domainManagement"></a>

```go
DomainManagement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}.

---

##### `EmailServiceId`<sup>Required</sup> <a name="EmailServiceId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.emailServiceId"></a>

```go
EmailServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.timeouts"></a>

```go
Timeouts EmailCommunicationServiceDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#timeouts EmailCommunicationServiceDomain#timeouts}

---

##### `UserEngagementTrackingEnabled`<sup>Optional</sup> <a name="UserEngagementTrackingEnabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.userEngagementTrackingEnabled"></a>

```go
UserEngagementTrackingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}.

---

### EmailCommunicationServiceDomainTimeouts <a name="EmailCommunicationServiceDomainTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}.

---

### EmailCommunicationServiceDomainVerificationRecords <a name="EmailCommunicationServiceDomainVerificationRecords" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainVerificationRecords {

}
```


### EmailCommunicationServiceDomainVerificationRecordsDkim <a name="EmailCommunicationServiceDomainVerificationRecordsDkim" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainVerificationRecordsDkim {

}
```


### EmailCommunicationServiceDomainVerificationRecordsDkim2 <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainVerificationRecordsDkim2 {

}
```


### EmailCommunicationServiceDomainVerificationRecordsDmarc <a name="EmailCommunicationServiceDomainVerificationRecordsDmarc" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainVerificationRecordsDmarc {

}
```


### EmailCommunicationServiceDomainVerificationRecordsDomain <a name="EmailCommunicationServiceDomainVerificationRecordsDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainVerificationRecordsDomain {

}
```


### EmailCommunicationServiceDomainVerificationRecordsSpf <a name="EmailCommunicationServiceDomainVerificationRecordsSpf" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

&emailcommunicationservicedomain.EmailCommunicationServiceDomainVerificationRecordsSpf {

}
```


## Classes <a name="Classes" id="Classes"></a>

### EmailCommunicationServiceDomainTimeoutsOutputReference <a name="EmailCommunicationServiceDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmailCommunicationServiceDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmailCommunicationServiceDomainVerificationRecordsDkim2List <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2List" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDkim2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailCommunicationServiceDomainVerificationRecordsDkim2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get"></a>

```go
func Get(index *f64) EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2">EmailCommunicationServiceDomainVerificationRecordsDkim2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.internalValue"></a>

```go
func InternalValue() EmailCommunicationServiceDomainVerificationRecordsDkim2
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2">EmailCommunicationServiceDomainVerificationRecordsDkim2</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDkimList <a name="EmailCommunicationServiceDomainVerificationRecordsDkimList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDkimList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailCommunicationServiceDomainVerificationRecordsDkimList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get"></a>

```go
func Get(index *f64) EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDkimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim">EmailCommunicationServiceDomainVerificationRecordsDkim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailCommunicationServiceDomainVerificationRecordsDkim
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim">EmailCommunicationServiceDomainVerificationRecordsDkim</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDmarcList <a name="EmailCommunicationServiceDomainVerificationRecordsDmarcList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDmarcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailCommunicationServiceDomainVerificationRecordsDmarcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get"></a>

```go
func Get(index *f64) EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc">EmailCommunicationServiceDomainVerificationRecordsDmarc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailCommunicationServiceDomainVerificationRecordsDmarc
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc">EmailCommunicationServiceDomainVerificationRecordsDmarc</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDomainList <a name="EmailCommunicationServiceDomainVerificationRecordsDomainList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDomainList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailCommunicationServiceDomainVerificationRecordsDomainList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get"></a>

```go
func Get(index *f64) EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsDomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain">EmailCommunicationServiceDomainVerificationRecordsDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailCommunicationServiceDomainVerificationRecordsDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain">EmailCommunicationServiceDomainVerificationRecordsDomain</a>

---


### EmailCommunicationServiceDomainVerificationRecordsList <a name="EmailCommunicationServiceDomainVerificationRecordsList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailCommunicationServiceDomainVerificationRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get"></a>

```go
func Get(index *f64) EmailCommunicationServiceDomainVerificationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EmailCommunicationServiceDomainVerificationRecordsOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailCommunicationServiceDomainVerificationRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim">Dkim</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList">EmailCommunicationServiceDomainVerificationRecordsDkimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim2">Dkim2</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List">EmailCommunicationServiceDomainVerificationRecordsDkim2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dmarc">Dmarc</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList">EmailCommunicationServiceDomainVerificationRecordsDmarcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.domain">Domain</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList">EmailCommunicationServiceDomainVerificationRecordsDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.spf">Spf</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList">EmailCommunicationServiceDomainVerificationRecordsSpfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords">EmailCommunicationServiceDomainVerificationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dkim`<sup>Required</sup> <a name="Dkim" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim"></a>

```go
func Dkim() EmailCommunicationServiceDomainVerificationRecordsDkimList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList">EmailCommunicationServiceDomainVerificationRecordsDkimList</a>

---

##### `Dkim2`<sup>Required</sup> <a name="Dkim2" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim2"></a>

```go
func Dkim2() EmailCommunicationServiceDomainVerificationRecordsDkim2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List">EmailCommunicationServiceDomainVerificationRecordsDkim2List</a>

---

##### `Dmarc`<sup>Required</sup> <a name="Dmarc" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dmarc"></a>

```go
func Dmarc() EmailCommunicationServiceDomainVerificationRecordsDmarcList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList">EmailCommunicationServiceDomainVerificationRecordsDmarcList</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.domain"></a>

```go
func Domain() EmailCommunicationServiceDomainVerificationRecordsDomainList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList">EmailCommunicationServiceDomainVerificationRecordsDomainList</a>

---

##### `Spf`<sup>Required</sup> <a name="Spf" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.spf"></a>

```go
func Spf() EmailCommunicationServiceDomainVerificationRecordsSpfList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList">EmailCommunicationServiceDomainVerificationRecordsSpfList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailCommunicationServiceDomainVerificationRecords
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords">EmailCommunicationServiceDomainVerificationRecords</a>

---


### EmailCommunicationServiceDomainVerificationRecordsSpfList <a name="EmailCommunicationServiceDomainVerificationRecordsSpfList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsSpfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailCommunicationServiceDomainVerificationRecordsSpfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get"></a>

```go
func Get(index *f64) EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/emailcommunicationservicedomain"

emailcommunicationservicedomain.NewEmailCommunicationServiceDomainVerificationRecordsSpfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf">EmailCommunicationServiceDomainVerificationRecordsSpf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.internalValue"></a>

```go
func InternalValue() EmailCommunicationServiceDomainVerificationRecordsSpf
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf">EmailCommunicationServiceDomainVerificationRecordsSpf</a>

---



