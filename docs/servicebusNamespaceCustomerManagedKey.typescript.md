# `servicebusNamespaceCustomerManagedKey` Submodule <a name="`servicebusNamespaceCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceCustomerManagedKeyA <a name="ServicebusNamespaceCustomerManagedKeyA" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key azurerm_servicebus_namespace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

new servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA(scope: Construct, id: string, config: ServicebusNamespaceCustomerManagedKeyAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig">ServicebusNamespaceCustomerManagedKeyAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig">ServicebusNamespaceCustomerManagedKeyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicebusNamespaceCustomerManagedKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetInfrastructureEncryptionEnabled"></a>

```typescript
public resetInfrastructureEncryptionEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusNamespaceCustomerManagedKeyA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicebusNamespaceCustomerManagedKeyA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusNamespaceCustomerManagedKeyA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusNamespaceCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusNamespaceCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference">ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference">ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabledInput"></a>

```typescript
public readonly infrastructureEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicebusNamespaceCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceCustomerManagedKeyAConfig <a name="ServicebusNamespaceCustomerManagedKeyAConfig" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.Initializer"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

const servicebusNamespaceCustomerManagedKeyAConfig: servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusNamespaceCustomerManagedKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#timeouts ServicebusNamespaceCustomerManagedKeyA#timeouts}

---

### ServicebusNamespaceCustomerManagedKeyTimeouts <a name="ServicebusNamespaceCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.Initializer"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

const servicebusNamespaceCustomerManagedKeyTimeouts: servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference <a name="ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicebusNamespaceCustomerManagedKey } from '@cdktf/provider-azurerm'

new servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicebusNamespaceCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

---



