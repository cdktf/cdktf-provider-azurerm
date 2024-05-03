# `apiManagementAuthorizationServer` Submodule <a name="`apiManagementAuthorizationServer` Submodule" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementAuthorizationServer <a name="ApiManagementAuthorizationServer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server azurerm_api_management_authorization_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

new apiManagementAuthorizationServer.ApiManagementAuthorizationServer(scope: Construct, id: string, config: ApiManagementAuthorizationServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig">ApiManagementAuthorizationServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig">ApiManagementAuthorizationServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter">putTokenBodyParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetBearerTokenSendingMethods">resetBearerTokenSendingMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientAuthenticationMethod">resetClientAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDefaultScope">resetDefaultScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerPassword">resetResourceOwnerPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerUsername">resetResourceOwnerUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetSupportState">resetSupportState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenBodyParameter">resetTokenBodyParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementAuthorizationServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

---

##### `putTokenBodyParameter` <a name="putTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter"></a>

```typescript
public putTokenBodyParameter(value: IResolvable | ApiManagementAuthorizationServerTokenBodyParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]

---

##### `resetBearerTokenSendingMethods` <a name="resetBearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetBearerTokenSendingMethods"></a>

```typescript
public resetBearerTokenSendingMethods(): void
```

##### `resetClientAuthenticationMethod` <a name="resetClientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientAuthenticationMethod"></a>

```typescript
public resetClientAuthenticationMethod(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDefaultScope` <a name="resetDefaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDefaultScope"></a>

```typescript
public resetDefaultScope(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceOwnerPassword` <a name="resetResourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerPassword"></a>

```typescript
public resetResourceOwnerPassword(): void
```

##### `resetResourceOwnerUsername` <a name="resetResourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerUsername"></a>

```typescript
public resetResourceOwnerUsername(): void
```

##### `resetSupportState` <a name="resetSupportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetSupportState"></a>

```typescript
public resetSupportState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenBodyParameter` <a name="resetTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenBodyParameter"></a>

```typescript
public resetTokenBodyParameter(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementAuthorizationServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementAuthorizationServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementAuthorizationServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference">ApiManagementAuthorizationServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameter">tokenBodyParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList">ApiManagementAuthorizationServerTokenBodyParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethodsInput">authorizationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethodsInput">bearerTokenSendingMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethodInput">clientAuthenticationMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpointInput">clientRegistrationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScopeInput">defaultScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypesInput">grantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPasswordInput">resourceOwnerPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsernameInput">resourceOwnerUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportStateInput">supportStateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameterInput">tokenBodyParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethods">authorizationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethod">clientAuthenticationMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpoint">clientRegistrationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScope">defaultScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPassword">resourceOwnerPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsername">resourceOwnerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportState">supportState</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementAuthorizationServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference">ApiManagementAuthorizationServerTimeoutsOutputReference</a>

---

##### `tokenBodyParameter`<sup>Required</sup> <a name="tokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameter"></a>

```typescript
public readonly tokenBodyParameter: ApiManagementAuthorizationServerTokenBodyParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList">ApiManagementAuthorizationServerTokenBodyParameterList</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `authorizationMethodsInput`<sup>Optional</sup> <a name="authorizationMethodsInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethodsInput"></a>

```typescript
public readonly authorizationMethodsInput: string[];
```

- *Type:* string[]

---

##### `bearerTokenSendingMethodsInput`<sup>Optional</sup> <a name="bearerTokenSendingMethodsInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethodsInput"></a>

```typescript
public readonly bearerTokenSendingMethodsInput: string[];
```

- *Type:* string[]

---

##### `clientAuthenticationMethodInput`<sup>Optional</sup> <a name="clientAuthenticationMethodInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethodInput"></a>

```typescript
public readonly clientAuthenticationMethodInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientRegistrationEndpointInput`<sup>Optional</sup> <a name="clientRegistrationEndpointInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpointInput"></a>

```typescript
public readonly clientRegistrationEndpointInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `defaultScopeInput`<sup>Optional</sup> <a name="defaultScopeInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScopeInput"></a>

```typescript
public readonly defaultScopeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypesInput"></a>

```typescript
public readonly grantTypesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `resourceOwnerPasswordInput`<sup>Optional</sup> <a name="resourceOwnerPasswordInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPasswordInput"></a>

```typescript
public readonly resourceOwnerPasswordInput: string;
```

- *Type:* string

---

##### `resourceOwnerUsernameInput`<sup>Optional</sup> <a name="resourceOwnerUsernameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsernameInput"></a>

```typescript
public readonly resourceOwnerUsernameInput: string;
```

- *Type:* string

---

##### `supportStateInput`<sup>Optional</sup> <a name="supportStateInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportStateInput"></a>

```typescript
public readonly supportStateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementAuthorizationServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

---

##### `tokenBodyParameterInput`<sup>Optional</sup> <a name="tokenBodyParameterInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameterInput"></a>

```typescript
public readonly tokenBodyParameterInput: IResolvable | ApiManagementAuthorizationServerTokenBodyParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `authorizationMethods`<sup>Required</sup> <a name="authorizationMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethods"></a>

```typescript
public readonly authorizationMethods: string[];
```

- *Type:* string[]

---

##### `bearerTokenSendingMethods`<sup>Required</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethods"></a>

```typescript
public readonly bearerTokenSendingMethods: string[];
```

- *Type:* string[]

---

##### `clientAuthenticationMethod`<sup>Required</sup> <a name="clientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethod"></a>

```typescript
public readonly clientAuthenticationMethod: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientRegistrationEndpoint`<sup>Required</sup> <a name="clientRegistrationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpoint"></a>

```typescript
public readonly clientRegistrationEndpoint: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `defaultScope`<sup>Required</sup> <a name="defaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScope"></a>

```typescript
public readonly defaultScope: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `resourceOwnerPassword`<sup>Required</sup> <a name="resourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPassword"></a>

```typescript
public readonly resourceOwnerPassword: string;
```

- *Type:* string

---

##### `resourceOwnerUsername`<sup>Required</sup> <a name="resourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsername"></a>

```typescript
public readonly resourceOwnerUsername: string;
```

- *Type:* string

---

##### `supportState`<sup>Required</sup> <a name="supportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportState"></a>

```typescript
public readonly supportState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAuthorizationServerConfig <a name="ApiManagementAuthorizationServerConfig" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

const apiManagementAuthorizationServerConfig: apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationMethods">authorizationMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientRegistrationEndpoint">clientRegistrationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientAuthenticationMethod">clientAuthenticationMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.defaultScope">defaultScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerPassword">resourceOwnerPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerUsername">resourceOwnerUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.supportState">supportState</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenBodyParameter">tokenBodyParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]</code> | token_body_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}.

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}.

---

##### `authorizationMethods`<sup>Required</sup> <a name="authorizationMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationMethods"></a>

```typescript
public readonly authorizationMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}.

---

##### `clientRegistrationEndpoint`<sup>Required</sup> <a name="clientRegistrationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientRegistrationEndpoint"></a>

```typescript
public readonly clientRegistrationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}.

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}.

---

##### `bearerTokenSendingMethods`<sup>Optional</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.bearerTokenSendingMethods"></a>

```typescript
public readonly bearerTokenSendingMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}.

---

##### `clientAuthenticationMethod`<sup>Optional</sup> <a name="clientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientAuthenticationMethod"></a>

```typescript
public readonly clientAuthenticationMethod: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}.

---

##### `defaultScope`<sup>Optional</sup> <a name="defaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.defaultScope"></a>

```typescript
public readonly defaultScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceOwnerPassword`<sup>Optional</sup> <a name="resourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerPassword"></a>

```typescript
public readonly resourceOwnerPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}.

---

##### `resourceOwnerUsername`<sup>Optional</sup> <a name="resourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerUsername"></a>

```typescript
public readonly resourceOwnerUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}.

---

##### `supportState`<sup>Optional</sup> <a name="supportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.supportState"></a>

```typescript
public readonly supportState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementAuthorizationServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#timeouts ApiManagementAuthorizationServer#timeouts}

---

##### `tokenBodyParameter`<sup>Optional</sup> <a name="tokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenBodyParameter"></a>

```typescript
public readonly tokenBodyParameter: IResolvable | ApiManagementAuthorizationServerTokenBodyParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]

token_body_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}.

---

### ApiManagementAuthorizationServerTimeouts <a name="ApiManagementAuthorizationServerTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

const apiManagementAuthorizationServerTimeouts: apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}.

---

### ApiManagementAuthorizationServerTokenBodyParameter <a name="ApiManagementAuthorizationServerTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

const apiManagementAuthorizationServerTokenBodyParameter: apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAuthorizationServerTimeoutsOutputReference <a name="ApiManagementAuthorizationServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

new apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementAuthorizationServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

---


### ApiManagementAuthorizationServerTokenBodyParameterList <a name="ApiManagementAuthorizationServerTokenBodyParameterList" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

new apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get"></a>

```typescript
public get(index: number): ApiManagementAuthorizationServerTokenBodyParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementAuthorizationServerTokenBodyParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>[]

---


### ApiManagementAuthorizationServerTokenBodyParameterOutputReference <a name="ApiManagementAuthorizationServerTokenBodyParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer"></a>

```typescript
import { apiManagementAuthorizationServer } from '@cdktf/provider-azurerm'

new apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementAuthorizationServerTokenBodyParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>

---



