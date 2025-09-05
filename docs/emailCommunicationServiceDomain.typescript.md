# `emailCommunicationServiceDomain` Submodule <a name="`emailCommunicationServiceDomain` Submodule" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCommunicationServiceDomain <a name="EmailCommunicationServiceDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain azurerm_email_communication_service_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomain(scope: Construct, id: string, config: EmailCommunicationServiceDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig">EmailCommunicationServiceDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig">EmailCommunicationServiceDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetUserEngagementTrackingEnabled">resetUserEngagementTrackingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: EmailCommunicationServiceDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserEngagementTrackingEnabled` <a name="resetUserEngagementTrackingEnabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetUserEngagementTrackingEnabled"></a>

```typescript
public resetUserEngagementTrackingEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCommunicationServiceDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EmailCommunicationServiceDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailCommunicationServiceDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailCommunicationServiceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailCommunicationServiceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fromSenderDomain">fromSenderDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.mailFromSenderDomain">mailFromSenderDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference">EmailCommunicationServiceDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.verificationRecords">verificationRecords</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList">EmailCommunicationServiceDomainVerificationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagementInput">domainManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceIdInput">emailServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabledInput">userEngagementTrackingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagement">domainManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceId">emailServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabled">userEngagementTrackingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fromSenderDomain`<sup>Required</sup> <a name="fromSenderDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fromSenderDomain"></a>

```typescript
public readonly fromSenderDomain: string;
```

- *Type:* string

---

##### `mailFromSenderDomain`<sup>Required</sup> <a name="mailFromSenderDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.mailFromSenderDomain"></a>

```typescript
public readonly mailFromSenderDomain: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeouts"></a>

```typescript
public readonly timeouts: EmailCommunicationServiceDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference">EmailCommunicationServiceDomainTimeoutsOutputReference</a>

---

##### `verificationRecords`<sup>Required</sup> <a name="verificationRecords" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.verificationRecords"></a>

```typescript
public readonly verificationRecords: EmailCommunicationServiceDomainVerificationRecordsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList">EmailCommunicationServiceDomainVerificationRecordsList</a>

---

##### `domainManagementInput`<sup>Optional</sup> <a name="domainManagementInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagementInput"></a>

```typescript
public readonly domainManagementInput: string;
```

- *Type:* string

---

##### `emailServiceIdInput`<sup>Optional</sup> <a name="emailServiceIdInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceIdInput"></a>

```typescript
public readonly emailServiceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EmailCommunicationServiceDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

---

##### `userEngagementTrackingEnabledInput`<sup>Optional</sup> <a name="userEngagementTrackingEnabledInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabledInput"></a>

```typescript
public readonly userEngagementTrackingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainManagement`<sup>Required</sup> <a name="domainManagement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagement"></a>

```typescript
public readonly domainManagement: string;
```

- *Type:* string

---

##### `emailServiceId`<sup>Required</sup> <a name="emailServiceId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceId"></a>

```typescript
public readonly emailServiceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userEngagementTrackingEnabled`<sup>Required</sup> <a name="userEngagementTrackingEnabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabled"></a>

```typescript
public readonly userEngagementTrackingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCommunicationServiceDomainConfig <a name="EmailCommunicationServiceDomainConfig" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainConfig: emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.domainManagement">domainManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.emailServiceId">emailServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.userEngagementTrackingEnabled">userEngagementTrackingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainManagement`<sup>Required</sup> <a name="domainManagement" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.domainManagement"></a>

```typescript
public readonly domainManagement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}.

---

##### `emailServiceId`<sup>Required</sup> <a name="emailServiceId" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.emailServiceId"></a>

```typescript
public readonly emailServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EmailCommunicationServiceDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#timeouts EmailCommunicationServiceDomain#timeouts}

---

##### `userEngagementTrackingEnabled`<sup>Optional</sup> <a name="userEngagementTrackingEnabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.userEngagementTrackingEnabled"></a>

```typescript
public readonly userEngagementTrackingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}.

---

### EmailCommunicationServiceDomainTimeouts <a name="EmailCommunicationServiceDomainTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainTimeouts: emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}.

---

### EmailCommunicationServiceDomainVerificationRecords <a name="EmailCommunicationServiceDomainVerificationRecords" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainVerificationRecords: emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords = { ... }
```


### EmailCommunicationServiceDomainVerificationRecordsDkim <a name="EmailCommunicationServiceDomainVerificationRecordsDkim" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainVerificationRecordsDkim: emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim = { ... }
```


### EmailCommunicationServiceDomainVerificationRecordsDkim2 <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainVerificationRecordsDkim2: emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2 = { ... }
```


### EmailCommunicationServiceDomainVerificationRecordsDmarc <a name="EmailCommunicationServiceDomainVerificationRecordsDmarc" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainVerificationRecordsDmarc: emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc = { ... }
```


### EmailCommunicationServiceDomainVerificationRecordsDomain <a name="EmailCommunicationServiceDomainVerificationRecordsDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainVerificationRecordsDomain: emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain = { ... }
```


### EmailCommunicationServiceDomainVerificationRecordsSpf <a name="EmailCommunicationServiceDomainVerificationRecordsSpf" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

const emailCommunicationServiceDomainVerificationRecordsSpf: emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### EmailCommunicationServiceDomainTimeoutsOutputReference <a name="EmailCommunicationServiceDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailCommunicationServiceDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDkim2List <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2List" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get"></a>

```typescript
public get(index: number): EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2">EmailCommunicationServiceDomainVerificationRecordsDkim2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailCommunicationServiceDomainVerificationRecordsDkim2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2">EmailCommunicationServiceDomainVerificationRecordsDkim2</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDkimList <a name="EmailCommunicationServiceDomainVerificationRecordsDkimList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get"></a>

```typescript
public get(index: number): EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim">EmailCommunicationServiceDomainVerificationRecordsDkim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailCommunicationServiceDomainVerificationRecordsDkim;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim">EmailCommunicationServiceDomainVerificationRecordsDkim</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDmarcList <a name="EmailCommunicationServiceDomainVerificationRecordsDmarcList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get"></a>

```typescript
public get(index: number): EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc">EmailCommunicationServiceDomainVerificationRecordsDmarc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailCommunicationServiceDomainVerificationRecordsDmarc;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc">EmailCommunicationServiceDomainVerificationRecordsDmarc</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDomainList <a name="EmailCommunicationServiceDomainVerificationRecordsDomainList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get"></a>

```typescript
public get(index: number): EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain">EmailCommunicationServiceDomainVerificationRecordsDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailCommunicationServiceDomainVerificationRecordsDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain">EmailCommunicationServiceDomainVerificationRecordsDomain</a>

---


### EmailCommunicationServiceDomainVerificationRecordsList <a name="EmailCommunicationServiceDomainVerificationRecordsList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get"></a>

```typescript
public get(index: number): EmailCommunicationServiceDomainVerificationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EmailCommunicationServiceDomainVerificationRecordsOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim">dkim</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList">EmailCommunicationServiceDomainVerificationRecordsDkimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim2">dkim2</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List">EmailCommunicationServiceDomainVerificationRecordsDkim2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dmarc">dmarc</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList">EmailCommunicationServiceDomainVerificationRecordsDmarcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList">EmailCommunicationServiceDomainVerificationRecordsDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.spf">spf</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList">EmailCommunicationServiceDomainVerificationRecordsSpfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords">EmailCommunicationServiceDomainVerificationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dkim`<sup>Required</sup> <a name="dkim" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim"></a>

```typescript
public readonly dkim: EmailCommunicationServiceDomainVerificationRecordsDkimList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList">EmailCommunicationServiceDomainVerificationRecordsDkimList</a>

---

##### `dkim2`<sup>Required</sup> <a name="dkim2" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim2"></a>

```typescript
public readonly dkim2: EmailCommunicationServiceDomainVerificationRecordsDkim2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List">EmailCommunicationServiceDomainVerificationRecordsDkim2List</a>

---

##### `dmarc`<sup>Required</sup> <a name="dmarc" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dmarc"></a>

```typescript
public readonly dmarc: EmailCommunicationServiceDomainVerificationRecordsDmarcList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList">EmailCommunicationServiceDomainVerificationRecordsDmarcList</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.domain"></a>

```typescript
public readonly domain: EmailCommunicationServiceDomainVerificationRecordsDomainList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList">EmailCommunicationServiceDomainVerificationRecordsDomainList</a>

---

##### `spf`<sup>Required</sup> <a name="spf" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.spf"></a>

```typescript
public readonly spf: EmailCommunicationServiceDomainVerificationRecordsSpfList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList">EmailCommunicationServiceDomainVerificationRecordsSpfList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailCommunicationServiceDomainVerificationRecords;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords">EmailCommunicationServiceDomainVerificationRecords</a>

---


### EmailCommunicationServiceDomainVerificationRecordsSpfList <a name="EmailCommunicationServiceDomainVerificationRecordsSpfList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get"></a>

```typescript
public get(index: number): EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer"></a>

```typescript
import { emailCommunicationServiceDomain } from '@cdktf/provider-azurerm'

new emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf">EmailCommunicationServiceDomainVerificationRecordsSpf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailCommunicationServiceDomainVerificationRecordsSpf;
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf">EmailCommunicationServiceDomainVerificationRecordsSpf</a>

---



