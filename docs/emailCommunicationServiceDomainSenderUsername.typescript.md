# `emailCommunicationServiceDomainSenderUsername` Submodule <a name="`emailCommunicationServiceDomainSenderUsername` Submodule" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCommunicationServiceDomainSenderUsername <a name="EmailCommunicationServiceDomainSenderUsername" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username azurerm_email_communication_service_domain_sender_username}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername(scope: Construct, id: string, config: EmailCommunicationServiceDomainSenderUsernameConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig">EmailCommunicationServiceDomainSenderUsernameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig">EmailCommunicationServiceDomainSenderUsernameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.putTimeouts"></a>

```typescript
public putTimeouts(value: EmailCommunicationServiceDomainSenderUsernameTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCommunicationServiceDomainSenderUsername resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EmailCommunicationServiceDomainSenderUsername resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailCommunicationServiceDomainSenderUsername to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailCommunicationServiceDomainSenderUsername that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailCommunicationServiceDomainSenderUsername to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference">EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainIdInput">emailServiceDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainId">emailServiceDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeouts"></a>

```typescript
public readonly timeouts: EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference">EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailServiceDomainIdInput`<sup>Optional</sup> <a name="emailServiceDomainIdInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainIdInput"></a>

```typescript
public readonly emailServiceDomainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EmailCommunicationServiceDomainSenderUsernameTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emailServiceDomainId`<sup>Required</sup> <a name="emailServiceDomainId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.emailServiceDomainId"></a>

```typescript
public readonly emailServiceDomainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsername.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCommunicationServiceDomainSenderUsernameConfig <a name="EmailCommunicationServiceDomainSenderUsernameConfig" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.Initializer"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainSenderUsernameConfig: emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.emailServiceDomainId">emailServiceDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#email_service_domain_id EmailCommunicationServiceDomainSenderUsername#email_service_domain_id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#name EmailCommunicationServiceDomainSenderUsername#name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#display_name EmailCommunicationServiceDomainSenderUsername#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#id EmailCommunicationServiceDomainSenderUsername#id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailServiceDomainId`<sup>Required</sup> <a name="emailServiceDomainId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.emailServiceDomainId"></a>

```typescript
public readonly emailServiceDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#email_service_domain_id EmailCommunicationServiceDomainSenderUsername#email_service_domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#name EmailCommunicationServiceDomainSenderUsername#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#display_name EmailCommunicationServiceDomainSenderUsername#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#id EmailCommunicationServiceDomainSenderUsername#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EmailCommunicationServiceDomainSenderUsernameTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#timeouts EmailCommunicationServiceDomainSenderUsername#timeouts}

---

### EmailCommunicationServiceDomainSenderUsernameTimeouts <a name="EmailCommunicationServiceDomainSenderUsernameTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.Initializer"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainSenderUsernameTimeouts: emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#create EmailCommunicationServiceDomainSenderUsername#create}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#delete EmailCommunicationServiceDomainSenderUsername#delete}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#read EmailCommunicationServiceDomainSenderUsername#read}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#update EmailCommunicationServiceDomainSenderUsername#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#create EmailCommunicationServiceDomainSenderUsername#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#delete EmailCommunicationServiceDomainSenderUsername#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#read EmailCommunicationServiceDomainSenderUsername#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/email_communication_service_domain_sender_username#update EmailCommunicationServiceDomainSenderUsername#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference <a name="EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomainSenderUsername } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailCommunicationServiceDomainSenderUsernameTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomainSenderUsername.EmailCommunicationServiceDomainSenderUsernameTimeouts">EmailCommunicationServiceDomainSenderUsernameTimeouts</a>

---



