# `communicationServiceEmailDomainAssociation` Submodule <a name="`communicationServiceEmailDomainAssociation` Submodule" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CommunicationServiceEmailDomainAssociation <a name="CommunicationServiceEmailDomainAssociation" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association azurerm_communication_service_email_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

new communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation(scope: Construct, id: string, config: CommunicationServiceEmailDomainAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig">CommunicationServiceEmailDomainAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig">CommunicationServiceEmailDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: CommunicationServiceEmailDomainAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CommunicationServiceEmailDomainAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isConstruct"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformElement"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformResource"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CommunicationServiceEmailDomainAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CommunicationServiceEmailDomainAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CommunicationServiceEmailDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CommunicationServiceEmailDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference">CommunicationServiceEmailDomainAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.communicationServiceIdInput">communicationServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.emailServiceDomainIdInput">emailServiceDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.communicationServiceId">communicationServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.emailServiceDomainId">emailServiceDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: CommunicationServiceEmailDomainAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference">CommunicationServiceEmailDomainAssociationTimeoutsOutputReference</a>

---

##### `communicationServiceIdInput`<sup>Optional</sup> <a name="communicationServiceIdInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.communicationServiceIdInput"></a>

```typescript
public readonly communicationServiceIdInput: string;
```

- *Type:* string

---

##### `emailServiceDomainIdInput`<sup>Optional</sup> <a name="emailServiceDomainIdInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.emailServiceDomainIdInput"></a>

```typescript
public readonly emailServiceDomainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CommunicationServiceEmailDomainAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a>

---

##### `communicationServiceId`<sup>Required</sup> <a name="communicationServiceId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.communicationServiceId"></a>

```typescript
public readonly communicationServiceId: string;
```

- *Type:* string

---

##### `emailServiceDomainId`<sup>Required</sup> <a name="emailServiceDomainId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.emailServiceDomainId"></a>

```typescript
public readonly emailServiceDomainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CommunicationServiceEmailDomainAssociationConfig <a name="CommunicationServiceEmailDomainAssociationConfig" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.Initializer"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

const communicationServiceEmailDomainAssociationConfig: communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.communicationServiceId">communicationServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#communication_service_id CommunicationServiceEmailDomainAssociation#communication_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.emailServiceDomainId">emailServiceDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#email_service_domain_id CommunicationServiceEmailDomainAssociation#email_service_domain_id}. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#id CommunicationServiceEmailDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `communicationServiceId`<sup>Required</sup> <a name="communicationServiceId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.communicationServiceId"></a>

```typescript
public readonly communicationServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#communication_service_id CommunicationServiceEmailDomainAssociation#communication_service_id}.

---

##### `emailServiceDomainId`<sup>Required</sup> <a name="emailServiceDomainId" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.emailServiceDomainId"></a>

```typescript
public readonly emailServiceDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#email_service_domain_id CommunicationServiceEmailDomainAssociation#email_service_domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#id CommunicationServiceEmailDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CommunicationServiceEmailDomainAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#timeouts CommunicationServiceEmailDomainAssociation#timeouts}

---

### CommunicationServiceEmailDomainAssociationTimeouts <a name="CommunicationServiceEmailDomainAssociationTimeouts" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.Initializer"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

const communicationServiceEmailDomainAssociationTimeouts: communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#create CommunicationServiceEmailDomainAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#delete CommunicationServiceEmailDomainAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#read CommunicationServiceEmailDomainAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#create CommunicationServiceEmailDomainAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#delete CommunicationServiceEmailDomainAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/communication_service_email_domain_association#read CommunicationServiceEmailDomainAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CommunicationServiceEmailDomainAssociationTimeoutsOutputReference <a name="CommunicationServiceEmailDomainAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { communicationServiceEmailDomainAssociation } from '@cdktf/provider-azurerm'

new communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CommunicationServiceEmailDomainAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.communicationServiceEmailDomainAssociation.CommunicationServiceEmailDomainAssociationTimeouts">CommunicationServiceEmailDomainAssociationTimeouts</a>

---



