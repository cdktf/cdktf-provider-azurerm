# `apiManagementNotificationRecipientEmail` Submodule <a name="`apiManagementNotificationRecipientEmail` Submodule" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementNotificationRecipientEmail <a name="ApiManagementNotificationRecipientEmail" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email azurerm_api_management_notification_recipient_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

new apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail(scope: Construct, id: string, config: ApiManagementNotificationRecipientEmailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig">ApiManagementNotificationRecipientEmailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig">ApiManagementNotificationRecipientEmailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementNotificationRecipientEmailTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementNotificationRecipientEmail resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementNotificationRecipientEmail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementNotificationRecipientEmail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementNotificationRecipientEmail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementNotificationRecipientEmail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference">ApiManagementNotificationRecipientEmailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementIdInput">apiManagementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementId">apiManagementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementNotificationRecipientEmailTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference">ApiManagementNotificationRecipientEmailTimeoutsOutputReference</a>

---

##### `apiManagementIdInput`<sup>Optional</sup> <a name="apiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementIdInput"></a>

```typescript
public readonly apiManagementIdInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementNotificationRecipientEmailTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementId"></a>

```typescript
public readonly apiManagementId: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementNotificationRecipientEmailConfig <a name="ApiManagementNotificationRecipientEmailConfig" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.Initializer"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

const apiManagementNotificationRecipientEmailConfig: apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.apiManagementId">apiManagementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.apiManagementId"></a>

```typescript
public readonly apiManagementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementNotificationRecipientEmailTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#timeouts ApiManagementNotificationRecipientEmail#timeouts}

---

### ApiManagementNotificationRecipientEmailTimeouts <a name="ApiManagementNotificationRecipientEmailTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.Initializer"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

const apiManagementNotificationRecipientEmailTimeouts: apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementNotificationRecipientEmailTimeoutsOutputReference <a name="ApiManagementNotificationRecipientEmailTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementNotificationRecipientEmail } from '@cdktf/provider-azurerm'

new apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementNotificationRecipientEmailTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

---



